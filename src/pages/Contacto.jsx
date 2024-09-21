import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export default function Contacto({ t }) {
      const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
      const onSubmit = async (data) => {
        try {
          const serviceID = 'portafolio-react';
          const templateID = 'portafolio-react';

          emailjs.init({
            publicKey: 'k0YNNH3Wp6QCQrzRI',
            // Do not allow headless browsers
            blockHeadless: true,
            blockList: {
              // Block the suspended emails
              list: ['foo@emailjs.com', 'bar@emailjs.com'],
              // The variable contains the email address
              watchVariable: 'userEmail',
            },
            limitRate: {
              // Set the limit rate for the application
              id: 'Outlook',
              // Allow 1 request per 10s
              throttle: 10000,
            },
          });
    
          var templateParams = {
            name: 'hola',
            notes: 'Check this out!',
          };
    
          const response = await emailjs.send(serviceID, templateID, templateParams);
    
          if (response.status === 200) {
            alert('Correo enviado con éxito');
            reset(); // Reinicia el formulario tras enviar el correo
          }
        } catch (error) {
          console.error('Error enviando correo:', error);
          alert('Error enviando el correo');
        }
      };

    return (
        <>
            <main>
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <div>
                        <label>Nombre</label>
                        <input 
                        type="text"
                        {...register('name', { required: 'El nombre es requerido' })}
                        />
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>
                    
                    <div>
                        <label>Email</label>
                        <input 
                        type="email" 
                        {...register('email', { 
                            required: 'El email es requerido',
                            pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Formato de email no válido'
                            }
                        })}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    
                    <div>
                        <label>Mensaje</label>
                        <textarea 
                        {...register('message', { required: 'El mensaje es requerido' })}
                        />
                        {errors.message && <span>{errors.message.message}</span>}
                    </div>
                    
                    <button type="submit">Enviar</button>
                </form>
            </main>
            
        </>
    );
}