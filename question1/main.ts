export function isValidWalk(walk: string[]) {
    
    if (walk.length !== 10) {
        return false;
    }

    let vertical: number = 0; 
    let horizontal: number = 0;

    for (let i = 0; i < walk.length; i++) {
        const direction = walk[i];

        if (i > 0 && direction === walk[i - 1]) {
            return false; 
        }

        if (direction === 'n') {
            vertical += 1;
        } else if (direction === 's') {
            vertical -= 1;
        } else if (direction === 'e') {
            horizontal += 1;
        } else if (direction === 'w') {
            horizontal -= 1;
        }
    }
    return vertical === 0 && horizontal === 0;
}

