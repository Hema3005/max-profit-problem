function maxProfit(n) {
    let maxProfit = 0
    let findCombination = []
    for (let t = 0; t <= Math.floor(n / 5); t++) {
        for (let p = 0; p <= Math.floor(n / 4); p++) {
            for (let c = 0; c <= Math.floor(n / 10); c++) {
                let unit = t * 5 + p * 4 + c * 10
                if (unit <= n) {
                    let currentUnit = 0
                    let profit = 0
                    // theatres
                    for (let i = 0; i < t; i++) {
                        currentUnit += 5
                        profit += (n - currentUnit) * 1500
                    }

                    // pubs
                    for (let i = 0; i < p; i++) {
                        currentUnit += 4
                        profit += (n - currentUnit) * 1000
                    }
                    // commercial parks
                    for (let i = 0; i < c; i++) {
                        currentUnit += 10
                        profit += (n - currentUnit) * 2000
                    }
                    if (profit > maxProfit) {
                        maxProfit = profit
                        findCombination = [{ T: t, P: p, C: c }]
                    }
                    else if (profit === maxProfit) {
                        findCombination.push({ T: t, P: p, C: c })
                    }
                }
            }
        }
    }

    console.log("Earnings: $", maxProfit)
    console.log("Solutions")
    findCombination.forEach((value , index)=>{
        console.log(`${index+1}. T:${value.T} P:${value.P} C:${value.C}`)
    })

}

maxProfit(7)
maxProfit(8)
maxProfit(13)
