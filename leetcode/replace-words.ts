function replaceWords(dictionary: string[], sentence: string): string {
    const sentences = sentence.split(" ");

    for(let i = 0; i < sentences.length; i += 1) {
        let replace = sentences[i];
        
        for(let j = 0; j < dictionary.length; j += 1) {
            const sub = sentences[i].substring(0, dictionary[j].length);

            if(sub === dictionary[j] && replace.length > sub.length) {
                replace = sub;
            }
        }

        sentences[i] = replace;
    }

    return sentences.join(" ");
};