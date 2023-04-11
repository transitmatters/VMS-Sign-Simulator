import { VMSChar } from "./VMSChar";

interface VMSSignProps {
    origin: string; //fromDestination and toDestination maybe should be like Station type only? find this in NTT types.ts
    dest: string;
    a: string;
    b: string;
    clock: string;    // clockTime should probably eventually be like DateTime or equivalent, just time no date
    scale: number;
}

export const VMSSign: React.FC<VMSSignProps> = ({ origin, dest, a, b, clock, scale }) => {
    return(
        <div>
            <svg width={248*scale} height={40*scale}> {/*width 24 chars * 10 px, height same but 2 chars and 16 px, both are added 8 for 4px border*/}
                <rect width={248*scale} height={40*scale} fill="none" strokeWidth={8*scale} stroke="black"/>
                <VMSChar character="R" offsetX={0} offsetY={0} scale={scale}/>
                <VMSChar character="u" offsetX={1} offsetY={0} scale={scale}/>
                <VMSChar character="g" offsetX={2} offsetY={0} scale={scale}/>
                <VMSChar character="g" offsetX={3} offsetY={0} scale={scale}/>
                <VMSChar character="l" offsetX={4} offsetY={0} scale={scale}/>
                <VMSChar character="e" offsetX={5} offsetY={0} scale={scale}/>
                <VMSChar character="s" offsetX={6} offsetY={0} scale={scale}/>
                <VMSChar character=" " offsetX={7} offsetY={0} scale={scale}/>
                <VMSChar character=" " offsetX={8} offsetY={0} scale={scale}/>
                <VMSChar character=" " offsetX={9} offsetY={0} scale={scale}/>
                <VMSChar character=" " offsetX={10} offsetY={0} scale={scale}/>
                <VMSChar character=" " offsetX={11} offsetY={0} scale={scale}/> {/* space */}
                <VMSChar character="1" offsetX={12} offsetY={0} scale={scale}/> 
                <VMSChar character="1" offsetX={13} offsetY={0} scale={scale}/>
                <VMSChar character=" " offsetX={14} offsetY={0} scale={scale}/>
                <VMSChar character="y" offsetX={15} offsetY={0} scale={scale}/>
                <VMSChar character="r" offsetX={16} offsetY={0} scale={scale}/>
                <VMSChar character="s" offsetX={17} offsetY={0} scale={scale}/>
                <VMSChar character=" " offsetX={18} offsetY={0} scale={scale}/> {/* space */}
                <VMSChar character="1" offsetX={19} offsetY={0} scale={scale}/> 
                <VMSChar character="2" offsetX={20} offsetY={0} scale={scale}/>
                <VMSChar character=":" offsetX={21} offsetY={0} scale={scale}/>
                <VMSChar character="5" offsetX={22} offsetY={0} scale={scale}/>
                <VMSChar character="9" offsetX={23} offsetY={0} scale={scale}/>
                <VMSChar character="a" offsetX={0} offsetY={1} scale={scale}/>
                <VMSChar character="b" offsetX={1} offsetY={1} scale={scale}/>
                <VMSChar character="c" offsetX={2} offsetY={1} scale={scale}/>
                <VMSChar character="1" offsetX={3} offsetY={1} scale={scale}/>
                <VMSChar character="2" offsetX={4} offsetY={1} scale={scale}/>
                <VMSChar character="3" offsetX={5} offsetY={1} scale={scale}/>
                <VMSChar character=":" offsetX={6} offsetY={1} scale={scale}/>
                <VMSChar character=" " offsetX={7} offsetY={1} scale={scale}/>
                <VMSChar character="T" offsetX={8} offsetY={1} scale={scale}/>
                <VMSChar character="M" offsetX={9} offsetY={1} scale={scale}/>
                <VMSChar character=" " offsetX={10} offsetY={1} scale={scale}/>
                <VMSChar character=" " offsetX={11} offsetY={1} scale={scale}/> {/* space */}
                <VMSChar character=" " offsetX={12} offsetY={1} scale={scale}/> 
                <VMSChar character="8" offsetX={13} offsetY={1} scale={scale}/>
                <VMSChar character=" " offsetX={14} offsetY={1} scale={scale}/>
                <VMSChar character="m" offsetX={15} offsetY={1} scale={scale}/>
                <VMSChar character="i" offsetX={16} offsetY={1} scale={scale}/>
                <VMSChar character="n" offsetX={17} offsetY={1} scale={scale}/>
                <VMSChar character=" " offsetX={18} offsetY={1} scale={scale}/> {/* space */}
                <VMSChar character=" " offsetX={19} offsetY={1} scale={scale}/> 
                <VMSChar character=" " offsetX={20} offsetY={1} scale={scale}/>
                <VMSChar character=" " offsetX={21} offsetY={1} scale={scale}/>
                <VMSChar character=" " offsetX={22} offsetY={1} scale={scale}/>
                <VMSChar character=" " offsetX={23} offsetY={1} scale={scale}/>
            </svg>
            <h1>{origin}</h1>
            <h1>{dest}</h1>
            <h2>{a}</h2>
            <h2>{b}</h2>
            <h3>{clock}</h3>
            <h4>{scale}</h4>
        </div>
    )
}