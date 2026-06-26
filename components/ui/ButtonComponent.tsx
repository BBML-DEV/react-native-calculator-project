import { TouchableHighlight } from "react-native"

type props = {
    buttonTextValue?: string,
    functionCalculate?: () => void
}

export default function ButtonComponent ({buttonTextValue, functionCalculate}: props){
    return (
        <TouchableHighlight onPress={functionCalculate}>
            <text className="text-[40px] h-[calc(100vw/4)] w-[calc(100vw/4)] p-5 bg-[#f0f0f0] text-center border border-[#888]">{buttonTextValue}</text>
        </TouchableHighlight>
    )
}