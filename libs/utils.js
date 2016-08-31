import randomNumber from 'random-number'
import shuffle from 'shuffle-array'

export const randomNumberBetween = function (min, max) {
  return randomNumber({
    min: min,
    max: max,
    integer: true
  })
}

export const shuffleItems = function (items) {
  return shuffle(items)
}