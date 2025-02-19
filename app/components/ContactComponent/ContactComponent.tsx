import { data } from '@/app/data/data';
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import FallingLetters from '../FallingLetters/FallingLetters';
import { HoverableCTA } from './HoverableCTA';
import { useMediaQuery } from 'react-responsive';

const ContactComponent: React.FC = () => {
  const { name, email, phone, linkedin, github, image, resume } = data.contact;

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };

  const handleResumeClick = () => {
    window.open(resume, '_blank');
  };

  return (
    <div className="flex flex-col md:items-center w-full gap-2 py-4 rounded-lg">
      <div className="flex flex-col gap-2 md:items-center items-start">
        <div className="flex justify-center w-full">
          <div className="relative w-32 h-32 flex-shrink-0">
            <Image src={image} alt={name} fill className="object-contain rounded-full" sizes="64px" priority />
          </div>
        </div>
        <div className="flex flex-col items-center w-full gap-2">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FallingLetters text={name} />
          </h1>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex items-start md:items-center gap-4">
          <HoverableCTA>
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition-colors"
              onClick={handleEmailClick}
            >
              <FaEnvelope className="text-green-400" size={isMobile ? 26 : 16} />
              <p className="hidden md:block">{email}</p>
            </div>
          </HoverableCTA>
          <HoverableCTA>
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition-colors"
              onClick={handlePhoneClick}
            >
              <FaPhone className="text-green-400" size={isMobile ? 26 : 16} />
              <p className="hidden md:block">{phone}</p>
            </div>
          </HoverableCTA>
          <HoverableCTA>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition-colors"
            >
              <FaLinkedin className="text-green-400" size={isMobile ? 26 : 16} />
              <p className="hidden md:block">LinkedIn Profile</p>
            </a>
          </HoverableCTA>
          <HoverableCTA>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition-colors"
            >
              <FaGithub className="text-green-400" size={isMobile ? 26 : 16} />
              <p className="hidden md:block">GitHub Profile</p>
            </a>
          </HoverableCTA>
          <HoverableCTA>
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition-colors"
              onClick={handleResumeClick}
            >
              <FaFileDownload className="text-green-400" size={isMobile ? 26 : 16} />
              <p className="hidden md:block">Download Resume</p>
            </div>
          </HoverableCTA>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
