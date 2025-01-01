import { useState, useEffect } from 'react';
import { useUser } from '../App';
import emailjs from '@emailjs/browser';
import '../styles/EmailForm.css';

const EmailForm = ({ isOpen, onClose }) => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    })
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      const currentTime = new Date().toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setFormData({
        name: '',
        email: '',
        title: '',
        message: ''
      });
      
      alert('이메일이 성공적으로 전송되었습니다!');
      onClose();
    } catch (error) {
      console.error('이메일 전송 에러:', error);
      alert('이메일 전송에 실패했습니다.');
    }
  };
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(user.email);  // 여기에 본인 이메일 주소 입력
    alert('이메일 주소가 복사되었습니다!');
    onClose();
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      title: '',
      message: ''
    });
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="email-modal-overlay">
      <div className="email-modal">
        <form onSubmit={handleSubmit} className="email-form">
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">회신받을 이메일</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">내용</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          
          <div className="button-group">
            <div>
              <button type="button" onClick={handleCopyEmail} className="copy-email-button">
                이메일 주소만 필요하신가요?
              </button>
            </div>
            <div className="form-btn">
              <button type="button" onClick={handleCancel} className="cancel-button">
                취소
              </button>
              <button type="submit" className="submit-button">
                전송
              </button>
            </div>
          </div>
        </form>
        

      </div>
    </div>
  );
};

export default EmailForm;