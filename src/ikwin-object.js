export default obj => {
    return new ObjExp(obj)
}

class ObjExp {
    constructor(obj) {
        this.obj = obj
    }

    match(schema) {
        const schemaKey = Object.keys(schema)[0]
        const objectKeys = Object.keys(this.obj)

        let result

        for (let i = 0; i < objectKeys.length; i++) {
            const objectKey = objectKeys[i]

            if (
                schemaKey === objectKey &&
                typeof schema[schemaKey] === typeof this.obj[objectKey] &&
                this.includes(schema)
            ) {
                result = this.obj[objectKey]
                break
            } else if (this.obj[objectKey] !== null && typeof this.obj[objectKey] === 'object') {
                result = new ObjExp(this.obj[objectKey]).match(schema)

                if (result) {
                    break
                }
            }
        }

        return result
    }

    includes(schema) {
        return this.validate(schema).length === 0
    }

    validate(schema) {
        let results = []

        Object.keys(schema).forEach((schemaKey) => {
            if (typeof schema[schemaKey] === typeof this.obj[schemaKey]) {
                if (
                    schema[schemaKey] !== null &&
                    this.obj[schemaKey] !== null &&
                    typeof schema[schemaKey] === 'object'
                ) {
                    results = new ObjExp(this.obj[schemaKey])
                        .validate(schema[schemaKey])
                        .reduce((results, result) => results.concat(schemaKey + '.' + result), results)
                }
            } else {
                results.push(schemaKey)
            }
        })

        return results
    }
}
