## Usage

Is time to code:

### Quick start

Here's a quick example to get you started, it's literally all you need:

```
    import React from "react";
    import ReactDom from "react-dom";
    import MemeShare, { Container, AppleDots, Title } from "codememe2share";

    const App () => {
        return (
            <MemeShare>
                <Container>
                    <AppleDots />
                    <Title variant="h3">
                        Hola Mundo
                    </Title>
                </Container>
            </MemeShare>
        );
    }

    ReactDom.render(<App />, document.getElementById("root"));
```

Yes, this really is all you need to get started, as you can see in this live and interactive demo:

### Best preview

This documentation always reflects the latest stable version of CodeMeme2Share. You can find older versions of the documentation on a [separate page](https://)

### Next steps

Now that you have an idea of the basic setup, it's time to learn more about:

- How to set entire page like CodeMeme2Share?
- How [customize](https://) the components using [@emotion/css](https://npmjs.com/package/@emotion/css)?
