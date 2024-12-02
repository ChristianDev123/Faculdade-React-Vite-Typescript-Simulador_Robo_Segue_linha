import { HtmlHTMLAttributes, ReactNode } from "react";

interface IActionButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    disabled?: boolean | undefined;
    color: 'red' | 'green' | 'blue'
}
export default function Action_Button({ ...props }: IActionButtonProps) {
    return (
        <button
            disabled={props.disabled}
            className={`
                w-fit
                ${props.color == 'red'?'border-red-500'
                    :props.color == 'green'? 'border-green-500'
                    :'border-blue-500'
                }
                border-2 rounded-full
                py-2 px-3
                ${props.color == 'red'?'hover:bg-red-500'
                    :props.color == 'green'? 'hover:bg-green-500'
                    :'hover:bg-blue-500'
                }
                hover:text-white
                transition
                disabled:bg-gray-400 disabled:border-gray-400 disabled:text-white
`}
            {...props} />
    )
}