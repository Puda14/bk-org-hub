import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function ApplicationForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    personalEmail: "",
    schoolEmail: "",
    studentId: "",
    academicYear: "",
    faculty: "",
    major: "",
    class: "",
    clubs: "",
    technicalSkills: "",
    softSkills: "",
    careerGoal: "",
    achievements: "",
    languageSkill: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thông tin ứng viên:\n\n" + JSON.stringify(formData, null, 2));
    onClose();
  };

  const multilineFields = [
    "technicalSkills",
    "softSkills",
    "careerGoal",
    "achievements",
    "languageSkill",
  ];

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl rounded-xl bg-white p-6 space-y-4 shadow-xl text-black overflow-y-auto max-h-[90vh]">
          <Dialog.Title className="text-2xl font-bold text-red-600 mb-2">
            Ứng tuyển vào CLB / Lab
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            {[
              { label: "Họ và tên", name: "fullName" },
              { label: "Gmail cá nhân", name: "personalEmail", type: "email" },
              { label: "Gmail trường", name: "schoolEmail", type: "email" },
              { label: "Mã số sinh viên", name: "studentId" },
              { label: "Khoá", name: "academicYear", placeholder: "VD: K65, K66" },
              { label: "Trường", name: "faculty" },
              { label: "Ngành", name: "major" },
              { label: "Lớp", name: "class" },
              {
                label: "Tên CLB / Lab muốn ứng tuyển",
                name: "clubs",
                placeholder: "VD: sinno, bksec",
              },
              { label: "Kỹ năng chuyên môn", name: "technicalSkills" },
              { label: "Kỹ năng mềm", name: "softSkills" },
              { label: "Định hướng nghề nghiệp", name: "careerGoal" },
              { label: "Thành tựu", name: "achievements" },
              { label: "Trình độ ngoại ngữ", name: "languageSkill" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block font-medium text-gray-700 mb-1">
                  {field.label}
                </label>

                {multilineFields.includes(field.name) ? (
                  <textarea
                    name={field.name}
                    rows={4}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 resize-y"
                  />
                ) : (
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                )}
              </div>
            ))}

            <div className="flex justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
              >
                Huỷ
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Gửi đơn
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
