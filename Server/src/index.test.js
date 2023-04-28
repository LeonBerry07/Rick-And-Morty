describe("POST /rickandmorty/fav", () => {
    it("Debe guardar el perosnaje en favortitos", async () => {
        const response = await request.post('/rickandmorty/fav').send(character);
        expect(response.body).toContainEqual(character);
    });

    it("Debe agregar el perosnaje a favoritos sin eliminar los anteriores", async () => {
        character.id = 1234;
        character.name = 'León';
        const response = await request.post('/rickandmorty/fav').send(character);
        expect(response.body.length).toBe(2);
    });
});

describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos", async () => {
        const response = await request.delete('/rickandmorty/fav/47124');
        expect(response.body.length).toBe(2);
    })

    it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos", async () => {
        const response = await request.delete('/rickandmorty/fav/41747');
        expect(response.body.length).toBe(1);
    })
})