import { ReactNode } from "react";

type CheckboxProps = {
    children: ReactNode;
    checked: boolean;
    setChecked: (checked: boolean) => void;
    name: string;
    className?: string;
};

function Checkbox({ children, checked, setChecked,name , className }: CheckboxProps) {
    return (
        <div className={`inline-flex items-center w-full sm:w-auto ${className}`}>
            <label className="flex items-center cursor-pointer relative" htmlFor={'checkbox-' + name}>
                <input type="checkbox"
                       checked={checked}
                       onChange={(e) => setChecked(e.target.checked)}
                       className="peer  h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border bg-form-component border-form-component checked:bg-white checked:border-white"
                       id={'checkbox-' + name}/>
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg"
               className="h-3.5 w-3.5"
               viewBox="0 0 20 20"
               stroke="currentColor"
               stroke-width="1">
            <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
          </svg>
        </span>
            </label>
            <label className="cursor-pointer ml-2 text-light-gray text-sm"
                   htmlFor={'checkbox-' + name}>
                {children}
            </label>
        </div>
    );
}

export default Checkbox;
