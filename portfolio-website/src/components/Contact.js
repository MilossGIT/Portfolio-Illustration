import React, { useState, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Instagram, Globe, Send, Check } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const CONTACT_EMAIL = 'minasesek@gmail.com';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

const emailJsConfigured =
  typeof EMAILJS_SERVICE_ID === 'string' &&
  EMAILJS_SERVICE_ID.length > 0 &&
  typeof EMAILJS_TEMPLATE_ID === 'string' &&
  EMAILJS_TEMPLATE_ID.length > 0 &&
  typeof EMAILJS_PUBLIC_KEY === 'string' &&
  EMAILJS_PUBLIC_KEY.length > 0;

const web3formsConfigured =
  typeof WEB3FORMS_ACCESS_KEY === 'string' && WEB3FORMS_ACCESS_KEY.length > 0;

async function submitViaWeb3Forms({ name, email, message }) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Portfolio contact · ${name}`,
      name,
      email,
      message,
      replyto: email,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.success !== true) {
    throw new Error(data.message || 'Web3Forms request failed');
  }
}

function buildMailtoHref({ name, email, message }) {
  const subject = encodeURIComponent(`Portfolio contact · ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\nReply to: ${email}`);
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const showSuccessUi = () => {
        setIsSuccess(true);
        toast.custom(() => (
          <m.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className='bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4'
          >
            <div className='bg-green-100 rounded-full p-2'>
              <Check className='w-6 h-6 text-green-500' />
            </div>
            <div>
              <h3 className='font-light'>Message Sent!</h3>
              <p className='text-gray-600'>Thank you for reaching out!</p>
            </div>
          </m.div>
        ));
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 3000);
      };

      if (emailJsConfigured) {
        const result = await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY,
        );
        if (result.text === 'OK') {
          showSuccessUi();
        }
      } else if (web3formsConfigured) {
        await submitViaWeb3Forms(formData);
        showSuccessUi();
      } else {
        window.location.href = buildMailtoHref(formData);
        toast.success(
          'Your email app should open with a draft. Tap Send there—mailto does not deliver until you send.',
          { duration: 6000 },
        );
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Contact send error:', error);
      toast.error(
        'Could not send from the site. Opening your mail app instead—please tap Send to deliver.',
        { duration: 6000 },
      );
      window.location.href = buildMailtoHref(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='pt-[5.75rem] sm:pt-[6rem] md:pt-[6.375rem] lg:pt-[6.75rem] pb-16 bg-white'>
      <Toaster position='top-center' />
      <div className='container mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='max-w-6xl mx-auto'
        >
          <h2 className='text-4xl md:text-5xl font-light text-center mb-4 tracking-tight text-gray-900'>
            Get in Touch
          </h2>
          <p className='text-gray-600 text-center mb-12 max-w-2xl mx-auto font-light'>
            I'm always open for new projects and creative collaborations. Feel
            free to reach out!
          </p>

          <div className='grid md:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='space-y-8'
            >
              <m.div
                className='glass-card shadow-lg p-8 hover-lift relative overflow-hidden group'
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Animated Background Gradient */}
                <m.div
                  className='absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                />

                <h3 className='text-2xl font-light mb-6 relative z-10'>
                  Contact Information
                </h3>

                <div className='space-y-6 relative z-10'>
                  <m.div
                    whileHover={{ x: 10, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className='flex items-center space-x-4 cursor-pointer'
                  >
                    <m.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Mail className='w-6 h-6 text-pink-500' />
                    </m.div>
                    <div>
                      <p className='font-light'>Email</p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className='text-gray-600 hover:text-pink-500 transition-colors'
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </m.div>

                  <m.div
                    whileHover={{ x: 10, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className='flex items-center space-x-4 cursor-pointer'
                  >
                    <m.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className='w-6 h-6 text-pink-500' />
                    </m.div>
                    <div>
                      <p className='font-light'>Location</p>
                      <p className='text-gray-600'>Slovenia</p>
                    </div>
                  </m.div>
                </div>

                <div className='mt-8 relative z-10'>
                  <h4 className='text-lg font-light mb-4'>Follow Me</h4>
                  <div className='flex space-x-4'>
                    <m.a
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      href='https://www.behance.net/miminart'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 bg-gray-100 rounded-full hover:bg-pink-100 transition-colors'
                    >
                      <Globe className='w-5 h-5 text-pink-500' />
                    </m.a>
                    <m.a
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      href='https://www.instagram.com/misemillustrations/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 bg-gray-100 rounded-full hover:bg-pink-100 transition-colors'
                    >
                      <Instagram className='w-5 h-5 text-pink-500' />
                    </m.a>
                  </div>
                </div>
              </m.div>
            </m.div>

            {/* Contact Form */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='glass-card shadow-lg p-8 hover-lift'
            >
              <h3 className='text-2xl font-light mb-6'>Send Me a Message</h3>

              {!emailJsConfigured && !web3formsConfigured && (
                <p className='text-sm text-gray-600 font-light mb-6 leading-relaxed'>
                  Tap <span className='text-gray-800'>Send Message</span>, then{' '}
                  <span className='text-gray-800'>Send</span> again in your email app—the site cannot
                  receive mail until your app actually sends it.
                </p>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-light text-gray-700 mb-1'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='user_name'
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-light text-gray-700 mb-1'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='user_email'
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-light text-gray-700 mb-1'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='4'
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors'
                    required
                  />
                </div>

                <m.button
                  type='submit'
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg text-white font-light 
                    ${isSubmitting
                      ? 'bg-gray-400'
                      : 'bg-[#DE6EA0] hover:bg-[#BE5F8D]'
                    } 
                    transition-colors flex items-center justify-center space-x-2`}
                >
                  {isSubmitting ? (
                    <div className='flex items-center space-x-2'>
                      <m.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className='w-5 h-5 border-2 border-white border-t-transparent rounded-full'
                      />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <Send className='w-5 h-5' />
                      <span>Send Message</span>
                    </>
                  )}
                </m.button>

                <AnimatePresence>
                  {isSuccess && (
                    <m.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className='text-center'
                    >
                      <m.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 360, 360],
                        }}
                        transition={{ duration: 0.5 }}
                        className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2'
                      >
                        <Check className='w-6 h-6 text-green-500' />
                      </m.div>
                      <p className='text-green-500 font-light'>
                        Message sent successfully!
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>
              </form>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Contact;
