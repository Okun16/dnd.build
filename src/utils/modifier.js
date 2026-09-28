export default function modifier(stat){
    const m = Math.floor((stat - 10) / 2)
    return m >=0 ? `+${m}` : `${m}`
}