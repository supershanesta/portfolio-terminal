import { data } from '@/app/data/data';
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactComponent: React.FC = () => {
  const { name, email, phone, linkedin, github, image } = data.contact;

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 py-6 rounded-lg bg-black/20">
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image src={image} alt={name} fill className="object-contain" sizes="64px" priority />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold flex items-center gap-2">{name}</h1>

        <div
          className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition-colors"
          onClick={handleEmailClick}
        >
          <FaEnvelope className="text-green-400" />
          <p>{email}</p>
        </div>

        <div
          className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition-colors"
          onClick={handlePhoneClick}
        >
          <FaPhone className="text-green-400" />
          <p>{phone}</p>
        </div>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition-colors"
        >
          <FaLinkedin className="text-green-400" />
          <p>LinkedIn Profile</p>
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition-colors"
        >
          <FaGithub className="text-green-400" />
          <p>GitHub Profile</p>
        </a>
      </div>
    </div>
  );
};

export default ContactComponent;
