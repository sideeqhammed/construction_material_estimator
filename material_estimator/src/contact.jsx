function Contact() {
  return (
    <div className="flex flex-col items-center gap-5 py-10">
      <h1 className="text-3xl font-extrabold">Contact Us</h1>
      <p className="text-lg text-gray-700">If you have any questions or feedback, please feel free to reach out to us!</p>
      <div className="flex flex-col gap-3 bg-amber-50 p-5 rounded shadow">
        <p><a href="mailto:info@example.com" className="text-blue-500 hover:underline">Click to send an Email</a></p>
      </div>
    </div>
  );
}

export default Contact;