import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const SocialMediaIconRow = () => {
  return (
    <div className=" flex gap-3 mt-4">
      <FaFacebookF className=" text-base cursor-pointer hover:text-secondaryColor hover:scale-125 hover:-translate-y-1 duration-200" />
      <FaInstagram className=" text-base cursor-pointer hover:text-secondaryColor hover:scale-125 hover:-translate-y-1 duration-200" />
      <FaTelegramPlane className=" text-base cursor-pointer hover:text-secondaryColor hover:scale-125 hover:-translate-y-1 duration-200" />
      <FaLinkedinIn className=" text-base cursor-pointer hover:text-secondaryColor hover:scale-125 hover:-translate-y-1 duration-200" />
      <FaTwitter className=" text-base cursor-pointer hover:text-secondaryColor hover:scale-125 hover:-translate-y-1 duration-200" />
    </div>
  );
};

export default SocialMediaIconRow;
