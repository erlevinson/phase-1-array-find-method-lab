// code your solution here
function superbowlWin(wins) {
    let result = wins.find(wins => wins.result === "W")
    return !!result ? result.year : undefined
}

