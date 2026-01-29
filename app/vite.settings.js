import fs from 'fs'

export default class ViteSettings {
    /**
     * @param {String} dir Directory to scan for JS files.
     * @returns {Object}
     */
    static getJsEntries(dir) {
        const entries = {};

        fs.readdirSync(dir).forEach(file =>{
            file.endsWith('.js') && (entries[file.slice(0, -3)] = `${dir}/${file}`)
        });

        return entries;
    }
}
