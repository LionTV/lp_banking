import { writable } from 'svelte/store';

export const navigationnumber = writable(0); // Navigationbar

export const fullname = writable(""); // Full name of second card
export const cardcategory = writable("Personal"); // category of the second card

export const totalbalance = writable(0); // Balance of the two accounts
export const showSecondAcc = writable(false);

export const bitcoinwallet = writable(5.32);
export const bitcoinprice = writable(5);
export const totalwallet = writable(0);
