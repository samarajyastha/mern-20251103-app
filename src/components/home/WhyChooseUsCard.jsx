const WhyChooseUsCard = ({ title, subtitle, icon, iconBg }) => {
  return (
    <div className="bg-gray-50 flex flex-col items-center text-center dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow transition duration-300">
      <div
        className={`${iconBg} rounded-full flex items-center justify-center h-16 w-16 mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
    </div>
  );
};

export default WhyChooseUsCard;
