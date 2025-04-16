export const adminSelectClassName =
  "text-letterColorLight cursor-pointer outline-none bg-primaryColor rounded-[4px] h-[40px] p-1 text-xs sm:text-sm lg:text-base";

export const adminLabelClassName = "text-xs sm:text-sm lg:text-base";

export const selectStyles = {
  control: () => "border border-gray-300 rounded-md px-2 py-1 shadow-sm",
  option: ({ isFocused }: { isFocused: boolean }) =>
    isFocused ? "bg-blue-100 text-blue-900 px-2 py-1" : "px-2 py-1",
  menu: () => "bg-white shadow-md rounded-md mt-1",
};
