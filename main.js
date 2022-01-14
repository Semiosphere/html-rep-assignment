const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const compHTMLMaker = (compObj) => {
    
    const compHTMLSection = `<section ${compObj.id}="computer--1">
        <h1>${compObj.manufacturer} ${compObj.make}</h1>
        <div>Model: ${compObj.model}</div>
        <div>Memory: ${compObj.specs.memory} GB</div>
        <div>Hard drive space: ${compObj.specs.hardDrive}</div>
        ,div>Processor speed: ${compObj.specs.processor} Ghz</div>
    </section>`

    return compHTMLSection
}

const stringReturnedFromFunction = compHTMLMaker(computer)

console.log(stringReturnedFromFunction)
