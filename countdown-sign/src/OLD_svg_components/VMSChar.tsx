import { VMSDot } from "./VMSDot";

interface VMSCharProps {
    character: string;
    offsetX: number; // this is in character positions!! so like 3,0 is the fourth character on the first line
    offsetY: number;
    scale: number;
}

interface GetColorProps {
    index: number;
    charPixels: string;
}

export const VMSChar: React.FC<VMSCharProps> = ({ character, offsetX, offsetY, scale }) => {
    offsetX = offsetX * 10;
    offsetY = offsetY * 16;
    var c = chars[charOrder.indexOf(character)];
    console.log(c)
    return(
        <g>
            <VMSDot xPos={offsetX+0} yPos={offsetY+0} scale={scale} color={gc(0,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+0} scale={scale} color={gc(1,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+0} scale={scale} color={gc(2,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+0} scale={scale} color={gc(3,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+0} scale={scale} color={gc(4,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+0} scale={scale} color={gc(5,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+0} scale={scale} color={gc(6,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+0} scale={scale} color={gc(7,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+0} scale={scale} color={gc(8,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+0} scale={scale} color={gc(9,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+1} scale={scale} color={gc(10,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+1} scale={scale} color={gc(11,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+1} scale={scale} color={gc(12,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+1} scale={scale} color={gc(13,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+1} scale={scale} color={gc(14,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+1} scale={scale} color={gc(15,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+1} scale={scale} color={gc(16,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+1} scale={scale} color={gc(17,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+1} scale={scale} color={gc(18,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+1} scale={scale} color={gc(19,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+2} scale={scale} color={gc(20,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+2} scale={scale} color={gc(21,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+2} scale={scale} color={gc(22,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+2} scale={scale} color={gc(23,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+2} scale={scale} color={gc(24,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+2} scale={scale} color={gc(25,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+2} scale={scale} color={gc(26,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+2} scale={scale} color={gc(27,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+2} scale={scale} color={gc(28,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+2} scale={scale} color={gc(29,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+3} scale={scale} color={gc(30,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+3} scale={scale} color={gc(31,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+3} scale={scale} color={gc(32,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+3} scale={scale} color={gc(33,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+3} scale={scale} color={gc(34,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+3} scale={scale} color={gc(35,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+3} scale={scale} color={gc(36,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+3} scale={scale} color={gc(37,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+3} scale={scale} color={gc(38,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+3} scale={scale} color={gc(39,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+4} scale={scale} color={gc(40,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+4} scale={scale} color={gc(41,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+4} scale={scale} color={gc(42,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+4} scale={scale} color={gc(43,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+4} scale={scale} color={gc(44,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+4} scale={scale} color={gc(45,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+4} scale={scale} color={gc(46,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+4} scale={scale} color={gc(47,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+4} scale={scale} color={gc(48,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+4} scale={scale} color={gc(49,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+5} scale={scale} color={gc(50,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+5} scale={scale} color={gc(51,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+5} scale={scale} color={gc(52,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+5} scale={scale} color={gc(53,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+5} scale={scale} color={gc(54,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+5} scale={scale} color={gc(55,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+5} scale={scale} color={gc(56,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+5} scale={scale} color={gc(57,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+5} scale={scale} color={gc(58,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+5} scale={scale} color={gc(59,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+6} scale={scale} color={gc(60,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+6} scale={scale} color={gc(61,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+6} scale={scale} color={gc(62,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+6} scale={scale} color={gc(63,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+6} scale={scale} color={gc(64,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+6} scale={scale} color={gc(65,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+6} scale={scale} color={gc(66,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+6} scale={scale} color={gc(67,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+6} scale={scale} color={gc(68,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+6} scale={scale} color={gc(69,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+7} scale={scale} color={gc(70,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+7} scale={scale} color={gc(71,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+7} scale={scale} color={gc(72,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+7} scale={scale} color={gc(73,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+7} scale={scale} color={gc(74,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+7} scale={scale} color={gc(75,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+7} scale={scale} color={gc(76,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+7} scale={scale} color={gc(77,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+7} scale={scale} color={gc(78,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+7} scale={scale} color={gc(79,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+8} scale={scale} color={gc(80,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+8} scale={scale} color={gc(81,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+8} scale={scale} color={gc(82,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+8} scale={scale} color={gc(83,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+8} scale={scale} color={gc(84,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+8} scale={scale} color={gc(85,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+8} scale={scale} color={gc(86,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+8} scale={scale} color={gc(87,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+8} scale={scale} color={gc(88,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+8} scale={scale} color={gc(89,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+9} scale={scale} color={gc(90,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+9} scale={scale} color={gc(91,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+9} scale={scale} color={gc(92,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+9} scale={scale} color={gc(93,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+9} scale={scale} color={gc(94,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+9} scale={scale} color={gc(95,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+9} scale={scale} color={gc(96,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+9} scale={scale} color={gc(97,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+9} scale={scale} color={gc(98,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+9} scale={scale} color={gc(99,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+10} scale={scale} color={gc(100,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+10} scale={scale} color={gc(101,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+10} scale={scale} color={gc(102,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+10} scale={scale} color={gc(103,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+10} scale={scale} color={gc(104,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+10} scale={scale} color={gc(105,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+10} scale={scale} color={gc(106,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+10} scale={scale} color={gc(107,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+10} scale={scale} color={gc(108,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+10} scale={scale} color={gc(109,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+11} scale={scale} color={gc(110,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+11} scale={scale} color={gc(111,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+11} scale={scale} color={gc(112,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+11} scale={scale} color={gc(113,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+11} scale={scale} color={gc(114,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+11} scale={scale} color={gc(115,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+11} scale={scale} color={gc(116,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+11} scale={scale} color={gc(117,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+11} scale={scale} color={gc(118,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+11} scale={scale} color={gc(119,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+12} scale={scale} color={gc(120,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+12} scale={scale} color={gc(121,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+12} scale={scale} color={gc(122,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+12} scale={scale} color={gc(123,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+12} scale={scale} color={gc(124,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+12} scale={scale} color={gc(125,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+12} scale={scale} color={gc(126,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+12} scale={scale} color={gc(127,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+12} scale={scale} color={gc(128,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+12} scale={scale} color={gc(129,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+13} scale={scale} color={gc(130,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+13} scale={scale} color={gc(131,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+13} scale={scale} color={gc(132,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+13} scale={scale} color={gc(133,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+13} scale={scale} color={gc(134,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+13} scale={scale} color={gc(135,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+13} scale={scale} color={gc(136,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+13} scale={scale} color={gc(137,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+13} scale={scale} color={gc(138,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+13} scale={scale} color={gc(139,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+14} scale={scale} color={gc(140,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+14} scale={scale} color={gc(141,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+14} scale={scale} color={gc(142,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+14} scale={scale} color={gc(143,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+14} scale={scale} color={gc(144,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+14} scale={scale} color={gc(145,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+14} scale={scale} color={gc(146,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+14} scale={scale} color={gc(147,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+14} scale={scale} color={gc(148,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+14} scale={scale} color={gc(149,c)}/>
            <VMSDot xPos={offsetX+0} yPos={offsetY+15} scale={scale} color={gc(150,c)}/>
            <VMSDot xPos={offsetX+1} yPos={offsetY+15} scale={scale} color={gc(151,c)}/>
            <VMSDot xPos={offsetX+2} yPos={offsetY+15} scale={scale} color={gc(152,c)}/>
            <VMSDot xPos={offsetX+3} yPos={offsetY+15} scale={scale} color={gc(153,c)}/>
            <VMSDot xPos={offsetX+4} yPos={offsetY+15} scale={scale} color={gc(154,c)}/>
            <VMSDot xPos={offsetX+5} yPos={offsetY+15} scale={scale} color={gc(155,c)}/>
            <VMSDot xPos={offsetX+6} yPos={offsetY+15} scale={scale} color={gc(156,c)}/>
            <VMSDot xPos={offsetX+7} yPos={offsetY+15} scale={scale} color={gc(157,c)}/>
            <VMSDot xPos={offsetX+8} yPos={offsetY+15} scale={scale} color={gc(158,c)}/>
            <VMSDot xPos={offsetX+9} yPos={offsetY+15} scale={scale} color={gc(159,c)}/>
            
        </g>
    )
}

function gc ( index: number, charPixels: string ) { //this gets color, name like this for shorter code
    return charPixels[index] == "0" ? "#111" : "#FC0"
}

const charOrder = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",":"," "];

// this is generated directly from extractfont.py, just copied and pasted
const chars = ['0001111100001111111001110001110110000011011000001101100000110110000011011000001101100000110110000011011000001101100000110111000111001111111000011111000000000000', '0000110000000111000000111100000000110000000011000000001100000000110000000011000000001100000000110000000011000000001100000000110000001111110000111111000000000000', '0001111100001111111001110001110110000011000000011100000011100000001110000001110000001110000000111000000111000000111000000111000000011111111101111111110000000000', '0001111100001111111001110001110110000011000000011100000001110000111110000011110000000001100000000011000000001101100000110111000111001111111000011111000000000000', '0000000110000000111000000111100000110110000110011000110001100110000110011111111101111111110000000110000000011000000001100000000110000000011000000001100000000000', '0111111111011111111101100000000110000000011000000001101111000111111110011100011100000000110000000011000000001100000000110111000111001111111000011111000000000000', '0001111100001111111001110001110110000011011000000001100000000110111100011111111001110001110110000011011000001101100000110111000111001111111000011111000000000000', '0111111111011111111100000000110000000110000000011000000011000000001100000000110000000110000000011000000011000000001100000000110000000011000000001100000000000000', '0001111100001111111001110001110110000011011000001101110001110011111110000111110000110001100110000011011000001101100000110111000111001111111000011111000000000000', '0001111100001111111001110001110110000011011000001101100000110111000111001111111100011110110000000011000000001101100000110111000111001111111000011111000000000000', '0001111100001111111001110001110110000011011000001101100000110110000011011111111101111111110110000011011000001101100000110110000011011000001101100000110000000000', '0111111100011111111001100001110110000011011000001101100001100111111100011111111001100001110110000011011000001101100000110110000111011111111001111111000000000000', '0000000000000000000000000000000000111100000110000000110000000010000000001000000000100000000010000000001100000000010011000001111000000000000000000000000000000000', '0111111100011111111001100001110110000011011000001101100000110110000011011000001101100000110110000011011000001101100000110110000111011111111001111111000000000000', '0000000000000000000000000000000011111110000100000000010000000001000000000110000000001000100000111110000010000000001000000000100100000001110000000000000000000000', '0111111111011111111101100000000110000000011000000001100000000111111110011111111001100000000110000000011000000001100000000110000000011000000001100000000000000000', '0001111100001111111001110001110110000000011000000001100000000110001111011000111101100000110110000011011000001101100000110111000111001111111000011111000000000000', '0110000011011000001101100000110110000011011000001101100000110111111111011111111101100000110110000011011000001101100000110110000011011000001101100000110000000000', '0000000000000000000000000000000000000000000100000000011000000000011100000001000000000100000000010000000001100000000010000001111111000000100000000010000000000000', '0000000000000000000000000000000000000000000000000000111111000001000000000010000000001000000000100000100010000010011000001111000000000000000000000000000000000000', '0000000000000000000000000000000000000000001000000000100100000010110000001110000000110000000011100000001011000000000000000000000000000000000000000000000000000000', '0110000000011000000001100000000110000000011000000001100000000110000000011000000001100000000110000000011000000001100000000110000000011111111101111111110000000000', '0000000000000000000000000000000000000000000000000000010100000001111000000111100000001110000000110100000010010000001000000000000000000000000000000000000000000000', '0110000011011100001101110000110111100011011110001101111100110110110011011011101101100110110110011111011000111101100011110110000111011000011101100000110000000000', '0001111100001111111001110001110110000011011000001101100000110110000011011000001101100000110110000011011000001101100000110111000111001111111000011111000000000000', '0111111100011111111001100001110110000011011000001101100001110111111110011111110001100000000110000000011000000001100000000110000000011000000001100000000000000000', '0000000000000000000000000000000000110000000111000001100010000100001000010010100001000100000011110000000000100000000010000000001100000000000000000000000000000000', '0111111100011111111001100001110110000011011000001101100001110111111110011111110001100011100110000111011000001101100000110110000011011000001101100000110000000000', '0001111100001111111001110001110110000011011000001101110000000011111100000111111000000001110000000011000000001101100000110111000111001111111000011111000000000000', '0000000000000000000000000000000000000000011111111000001000000000100000000010000000001000000000100000000010000000000000000000000000000000000000000000000000000000', '0110000011011000001101100000110110000011011000001101100000110110000011011000001101100000110110000011011000001101100000110111000111001111111000011111000000000000', '0000000000000000000000000000000000000000000000001000010001000001000100000100110000010010000000111000000011000000001100000000000000000000000000000000000000000000', '0110000011011000001101100000110110000011011000001101100000110110000011011000001101100100110110111011011111111101111011110111000111011000001101000000010000000000', '0000000000000000000000000000000000000000000100000000010000100000100110000011110000011100000000011000000000011000000000100000000000000000000000000000000000000000', '0000000000000000000000000000000001000000000100000000010010000000111000000010000000001000000000100000000001000000000100000000001000000000100000000000000000000000', '0000000000000000000000000000000000000000000011000000111110000000001000000000100000000110000001111000000010000000001000000001110000000000110000000000000000000000', '0000000000000000000000000000000000000000000111111000111111110000000011000000001100011111110011111111011100001101100000110110000011001111111100011110110000000000', '0000000000000000000000000000000000000000000000000000010000000001000000000100000000010000000001000000000111100000011110000000011000000000000000000000000000000000', '0000000000000000000000000000000000000000000111111000111111110111000011011000000001100000000110000000011000000001100000000111000011001111111100011111100000000000', '0000000011000000001100000000110000000011000111101100111111110111000111011000001101100000110110000011011000001101100000110111000111001111111100011110110000000000', '0000000000000000000000000000000000000000000111110000111111100111000111011000001101111111110111111110011000000001100000000111000000001111111100011111100000000000', '0000011110000011111100001100110000110000001111111000111111100000110000000011000000001100000000110000000011000000001100000000110000000011000000001100000000000000', '0000000000000000000000000000000000000000001111111001111111110110000011011000001101100000110111111111001111111100000000110110000011011111111100111111100000000000', '0110000000011000000001100000000110000000011011110001111111100111000111011000001101100000110110000011011000001101100000110110000011011000001101100000110000000000', '0000110000000011000000000000000000000000000011000000001100000000110000000011000000001100000000110000000011000000001100000000110000000011000000001100000000000000', '0000000000000000000000000000000000010000000000000000000000000000010000000001000000000100000000010000000101000000011100000000110000000000000000000000000000000000', '0110000000011000000001100000000110000000011000111001100111000110111000011111000001111000000111100000011111000001101110000110011100011000111001100001110000000000', '0000110000000011000000001100000000110000000011000000001100000000110000000011000000001100000000110000000011000000001100000000110000000011000000001100000000000000', '0000000000000000000000000000000000000000011100011101111011110111111111011011101101100100110110010011011001001101100100110110010011011001001101100100110000000000', '0000000000000000000000000000000000000000011011110001111111100111000111011000001101100000110110000011011000001101100000110110000011011000001101100000110000000000', '0000000000000000000000000000000000000000000111110000111111100111000111011000001101100000110110000011011000001101100000110111000111001111111000011111000000000000', '0000000000000000000000000000000000000000011011110001111111100111000111011000001101100000110111000111011111111001101111000110000000011000000001100000000000000000', '0000000000000000000000000000000000000000000000100000001110000001111000001011100000111010000010001000000000010000000001000000000100000000010000000000000000000000', '0000000000000000000000000000000000000000011011110001111111100111000111011000001101100000000110000000011000000001100000000110000000011000000001100000000000000000', '0000000000000000000000000000000000000000001111111001111111110110000011011000000001111111100011111111000000001100000000110110000011011111111100111111100000000000', '0000110000000011000000001100000000110000011111111001111111100000110000000011000000001100000000110000000011000000001100000000110000000011000000001100000000000000', '0000000000000000000000000000000000000000011000001101100000110110000011011000001101100000110110000011011000001101100000110111000111001111111100011110110000000000', '0000000000000000000000000000000000000000011000001101100000110110000011011000001101100000110110000011011100011100111011100001111100000011100000000100000000000000', '0000000000000000000000000000000000000000011000001101100000110110000011011000001101100000110110000011011001001101101110110111101111011100011101100000110000000000', '0000000000000000000000000000000000000000000000000000001000000000110010000001111000001110000111101000000000110000000000000000000000000000000000000000000000000000', '0000000000000000000000000000000000000000011000001101100000110110000011011000001101110001110011111111000111111100000000110110000011011111111000111111000000000000', '0000000000000000000000000000000000000000000000000000011100000011010000000001000000011110000000110000000110000000011111000000000000000000000000000000000000000000', '0000000000000000000000000000000000000000000110000000011000000001100000000000000000000000000000000000000110000000011000000001100000000000000000000000000000000000', '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'];