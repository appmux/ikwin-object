# ikwin-object aka objexp

Think of it as a regular expression for objects.

You simply create an object that describes a sample data structure
```
const sample = {
  items: [
    {
      id: 0,
      name: ''
    }
  ]
}
```
which is your regular expression that reads:

```
an object with a property `items` of a type of an array
  that holds objects with proerties:
    `id` of a type of a number
     and
    `name` of a type of a string.
```

and ready to be applied to a source object like so:
```
objexp(source).match(sample)
```

### Why do you need that?
Imagine you receive a gigantic json object from an API endpoint and you're looking for some data in it
that may or may not be there.
```
response.data.data.catalog.categories.clearance.items...
```
So you need to make sure that a sibling you're looking for and all its parents are there.
But even when you've got those items you need to access their properties carefully, because what if they are not there?
The code that does that usually has many `if` statements and replicated everywhere you trying to access received data. 

With the `objexp` it's all gone as the data is not only located but also automatically validated against a sample object. 

Such approach also promotes loose contracts between clients and APIs because it does not matter how big your object is
and where data you're looking for in it.


# Methods

### match()

Locates an object alike in an object.

```
objexp(source).match(sample)
```
##### Parameters
_sample_ - A sample object used as an expression to match an object alike in a source object.

##### Return value
An object containing the entire match result or null if there were no matches. 

### validate()

Validates an object against a sample object.

```
objexp(source).validate(sample)
```
##### Parameters
_sample_ - A sample object used as an expression to validate a source object against.

##### Return value
An array of missing items or an empty array in case of successful validation.


# Install
```
npm install ikwin-object
```

# Use
ES5
```
var objexp = require('ikwin-object').default
```

ES6
```
import objexp from 'ikwin-object'
```

# IKWIN

`ikwin-object` is a utility function to support IKWIN pattern. Learn more about IKWIN:

https://github.com/appmux/ikwin

