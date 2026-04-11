import NodeJs from "../../assets/nodejs.png";
import express from "../../assets/express.png";
import java from "../../assets/java.png";

const BackEndIcons = () => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-10 mx-auto" src={NodeJs} alt="Node.js" />
        <p className="my-4 pdt-body-muted">NodeJs</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-10 mx-auto" src={express} alt="Express" />
        <p className="my-4 pdt-body-muted">Express</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-10 mx-auto" src={java} alt="Java" />
        <p className="my-4 pdt-body-muted">Java</p>
      </div>
    </div>
  );
};

export default BackEndIcons;
