interface VMSDotProps {
    xPos: number;
    yPos: number;
    scale: number;
    color: string;
}

export const VMSDot: React.FC<VMSDotProps> = ({ xPos, yPos, scale, color }) => {
    return(
        <circle r={0.5*scale} cx={(4.5+xPos)*scale} cy={(4.5+yPos)*scale} fill={color}/>
    )
}