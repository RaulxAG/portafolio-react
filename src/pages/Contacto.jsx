import { useForm } from 'react-hook-form';

export default function Contacto({ t }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    window.Email.send({
      SecureToken: "your-secure-token", // Puedes generar un SecureToken desde https://smtpjs.com
      To: 'raul.arrgon@outlook.es', // Cambia esto al correo donde quieres recibir los emails
      From: data.email, // Correo del remitente (el usuario)
      Subject: `Mensaje de ${data.name}`,
      Body: data.message,
    })
    .then((message) => {
      alert("Correo enviado exitosamente!");
      reset(); // Resetear el formulario después de enviarlo
    })
    .catch((error) => alert("Error al enviar el correo: " + error));
  };

  return (
    <>
        <header className="pt-5">
            <h1 className="py-4 text-center">{t('contact')}</h1>
        </header>

        <main className="d-flex align-items-center justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="pt-5">
                <div className="d-flex flex-column">
                    <label>Nombre<span className="text-danger">*</span></label>
                    <input
                    type="text"
                    {...register('name', { required: "Este campo es requerido" })}
                    />
                    {errors.name && <span className="text-warning">{errors.name.message}</span>}
                </div>
                
                <div className="d-flex flex-column">
                    <label>Email<span className="text-danger">*</span></label>
                    <input
                    type="email"
                    {...register('email', {
                        required: "Este campo es requerido",
                        pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Formato de correo no válido"
                        }
                    })}
                    />
                    {errors.email && <span className="text-warning">{errors.email.message}</span>}
                </div>
                
                <div className="d-flex flex-column">
                    <label>Mensaje<span className="text-danger">*</span></label>
                    <textarea
                    {...register('message', { required: "Este campo es requerido" })}
                    />
                    {errors.message && <span className="text-warning">{errors.message.message}</span>}
                </div>
                    
                <button className="mt-2" type="submit">Enviar</button>
            </form>
        </main>
    </>
  );
}