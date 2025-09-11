import { MdAdd, MdArrowOutward } from "react-icons/md"

type IconType = 'arrow-up' | 'plus'

export default function InteractionButton({ icon, text }: { icon: IconType, text: string }) {
    return (
        <div className="flex bg-interaction rounded-full py-1.5 px-3 items-center gap-1 w-fit">
            {icon === 'arrow-up' ? 
                <MdArrowOutward className="text-2xs" /> : 
                <MdAdd className="text-2xs" />
            }
            <span className="font-abc-diatype text-3xs">{text}</span>
        </div>
    )
}
