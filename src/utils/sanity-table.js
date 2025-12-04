export function sanityTable(value) {    
    
    if (value >= 100) return 'stable';
    if (value >= 60) return 'unstable';
    if (value >= 20) return 'broken';
    return 'abyss';
    
}