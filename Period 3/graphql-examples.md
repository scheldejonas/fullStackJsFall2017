# GraphQL  - Examples



### Type system

```javascript
{
  hero {
    name
    appearsIn
  }
}
```

Returns

```javascript
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ]
    }
  }
}
```



