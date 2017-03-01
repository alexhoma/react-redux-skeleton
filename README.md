# React JS Boilerplate

Customized React JS + Redux bootstrap to initialize my projects based on several resources.

## Initialize

Just type this commands to initialize the app:
```avascript
> npm install
> npm start
```


## Content
Basic blog page example with some posts linked to its detailed view, and related by categories.
This example is getting the data from a mock endpoint. Using [mockable.io](https://www.mockable.io)

## The post object example is the following:
```javascript
{
       "id": 1,
        "slug": "hello-react",
        "title": "Hello React",
        "content": "The path of the righteous man is beset on all sides by the iniquities...",
        "author": "Samuel L. Jackson",
        "categories": [
            {
                "slug":"programming",
                "title": "Programming"
            },
            {
                "slug":"sports",
                "title": "Sports"
            }
        ]
    }
```
