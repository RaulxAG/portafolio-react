import { useForm } from 'react-hook-form';

export default function Contacto({ t }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    let token = "12029c05-de53-4b22-ad1c-0034499a6dd6";

    window.Email.send({
      SecureToken: token, // Puedes generar un SecureToken desde https://smtpjs.com
      To: 'raul.arrgon@outlook.es', // Cambia esto al correo donde quieres recibir los emails
      From: 'raul.arrgon@outlook.es', // Correo del remitente (el usuario)
      Subject: `Mensaje de ${data.name}`,
      Body: "Email:" + data.email + "<br>" +  "Nombre:" + data.name + "<br><br>" + "Mensaje:<br>" + data.message,
    }).then(
      message => alert(message)
    ).catch((error) => alert("Error al enviar el correo: " + error));
  };

  return (
    <>
        <header className="pt-5">
            <h1 className="pt-4 text-center">{t('contact')}</h1>
        </header>

        <main className="contact__content d-flex align-items-center justify-content-center m-auto">
            <form onSubmit={handleSubmit(onSubmit)} className='w-100'>
              
              <div className='form__inputs d-flex align-items-center justify-content-center gap-4'>
                <div className="d-flex flex-column w-50">
                    <label>Nombre<span className="text-danger">*</span></label>
                    <input
                    placeholder={errors.name && errors.name.message}
                    type="text"
                    {...register('name', { required: "Este campo es requerido" })}
                    />
                    {/* {errors.name && <span className="text-warning">{errors.name.message}</span>} */}
                </div>
                
                <div className="d-flex flex-column w-50">
                    <label>Email<span className="text-danger">*</span></label>
                    <input
                    placeholder={errors.email && errors.email.message}
                    type="email"
                    {...register('email', {
                        required: "Este campo es requerido",
                        pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Formato de correo no válido"
                        }
                    })}
                    />
                    {/* {errors.email && <span className="text-warning">{errors.email.message}</span>} */}
                </div>
              </div>
                
                <div className="d-flex flex-column">
                    <label>Mensaje<span className="text-danger">*</span></label>
                    <textarea 
                    placeholder={errors.message && errors.message.message}
                    rows={7}
                    {...register('message', { required: "Este campo es requerido" })}
                    />
                    {/* {errors.message && <span className="text-warning">{errors.message.message}</span>} */}
                </div>
                    
                <button className="mt-2" type="submit">Enviar</button>
            </form>
        </main>
    </>
  );
}