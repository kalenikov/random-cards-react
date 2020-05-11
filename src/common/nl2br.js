export const nl2br = (str, isXhtml) => {
    // Some latest browsers when str is null return and unexpected null value
    if (typeof str === 'undefined' || str === null) {
        return ''
    }

    // Adjust comment to avoid issue on locutus.io display
    const breakTag = (isXhtml || typeof isXhtml === 'undefined') ? '<br ' + '/>' : '<br>'

    return (str + '')
        .replace(/(\r\n|\n\r|\r|\n)/g, breakTag + '$1')
}

/**
 * This function inverses text from PHP's nl2br() with default parameters.
 *
 * @param {string} str Input text
 * @param {boolean} replaceMode Use replace instead of insert
 * @return {string} Filtered text
 */
export function br2nl (str, replaceMode = true) {

    if (typeof str === 'undefined' || str === null) {
        return ''
    }
    const replaceStr = (replaceMode) ? "\n" : '';
    // Includes <br>, <BR>, <br />, </br>
    // eslint-disable-next-line no-useless-escape
    return str.replace(/<\s*\/?br\s*[\/]?>/gi, replaceStr);
}
