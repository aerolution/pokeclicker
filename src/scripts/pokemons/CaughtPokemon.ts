/**
 * Created by dennis on 26-06-17.
 */
class CaughtPokemon {
    id: number;
    name: string;
    baseAttack: number;
    attack: KnockoutComputed<number>;
    evolved: boolean;
    attackBonus: KnockoutObservable<number>;
    exp: KnockoutObservable<number>;
    levelObservable: KnockoutComputed<number>;

    constructor(pokemonData: DataPokemon, ev: boolean, atBo: number, xp: number) {
        this.id = pokemonData.id;
        this.name = pokemonData.name;
        this.evolved = ev;
        this.attackBonus = ko.observable(atBo);
        this.exp = ko.observable(xp);
        this.levelObservable = ko.computed(() => {return PokemonHelper.calculateLevel(this)});
        this.baseAttack = pokemonData.attack
        this.attack = ko.computed(() => {return PokemonHelper.calculateAttack(this.baseAttack, this.attackBonus(), this.levelObservable())})
    }
}