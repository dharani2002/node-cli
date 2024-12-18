//case conversion
const caseConversion=(input, caseType)=>{
    if(caseType === 'upper') return input.toUpperCase();
    if(caseType === 'lower') return input.toLowerCase();
    throw new Error ('Invalid case type. try using "upper" or "lower"');
}

const isPalindrome=(input) =>{
    const normalized = input.replace(/[\W_]/g, '').toLowerCase();
    return normalized === normalized.split('').reverse().join('');
}

const wordCount=(input)=> {
    return input.split(/\s+/).filter(Boolean).length;
}

export {caseConversion, isPalindrome, wordCount};