import Std from "./stdInfoCard";

function ProfileUpd() {
  return (
    <div>
      <Std />
      <div className="mx-10 rounded-lg p-8 shadow-2xl border border-gray-300 mt-4 space-y-6 divide-y">
        <div className="flex justify-between border-b border-gray-400">
        <a href="#" className="hover:underline-offset-6 hover:underline hover:text-blue-500 ">Internship</a>
        <a href="#" className="hover:underline-offset-6 hover:underline hover:text-blue-500">Projects</a>
        <a href="#" className="hover:underline-offset-6 hover:underline hover:text-blue-500">Key Skills</a>
        <a href="#" className="hover:underline-offset-6 hover:underline hover:text-blue-500">Achievements</a>
        <a href="#" className="hover:underline-offset-6 hover:underline hover:text-blue-500">Awards & Scholarships</a>
        <a href="#" className="hover:underline-offset-6 hover:underline hover:text-blue-500">Portfolio</a>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpd;
