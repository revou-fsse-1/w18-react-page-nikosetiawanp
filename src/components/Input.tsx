export default function Input(props: {
  labelFor: string;
  label: string;
  type: string;
  id: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={props.labelFor} className="text-black text-sm">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.type}
        placeholder={props.placeholder}
        className="bg-white px-2 py-1 mb-2 border border-gray-500 rounded-lg w-full text-black placeholder:text-sm"
      />
    </div>
  );
}
