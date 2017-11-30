# Callback Hell

#### README < [Go back](/Period%205/)

### The hell to avoid

```javascript
async_ajax_1(function(){
    async_ajax_2(function(){
        async_ajax_3(function(){
            async_ajax_4(function(){
                async_ajax_5(function(){
                  return ({
                    name: 'Jonas',
                    age: 28,
                    home: 'Elsinore'
                  });
                });
            });
        });
    });
});
```



The way to avoid the callback hell, where you don't know when and where (easily) an error happened.

Or what step to take in and out when refactoring or more.

### The solution

```javascript
async_ajax_1
  then(async_ajax_2).
  then(async_ajax_3).
  then(async_ajax_4).
  then(async_ajax_5).
  catch(error_handling_callback_function);
});
```

