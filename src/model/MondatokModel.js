import { szenvedoMondatok } from "./angol.js";

class MondatokModel
{
    #fejlec;
    #segitseg;
    #mondatok;
    #jelenlegiMondatIndex;

    constructor()
    {
        this.#fejlec = szenvedoMondatok[0];
        this.#segitseg = szenvedoMondatok[1];
        this.#mondatok = [];
        for (let i = 2; i < szenvedoMondatok.length; i++)
        {
            this.#mondatok.push(szenvedoMondatok[i]);
        }
        this.#jelenlegiMondatIndex = 0;
    }

    get fejlec()
    {
        return this.#fejlec;
    }

    get segitseg()
    {
        return this.#segitseg;
    }

    get jelenlegiMondat()
    {
        return this.#mondatok[this.#jelenlegiMondatIndex];
    }

    helyes(szoveg)
    {
        return this.#mondatok[this.#jelenlegiMondatIndex].valasztas[0] === szoveg;
    }

    jelenlegiMondatIndexetLeptet()
    {
        if (++this.#jelenlegiMondatIndex >= this.#mondatok.length)
        {
            this.#jelenlegiMondatIndex = 0;
        }
    }
}

export default MondatokModel;