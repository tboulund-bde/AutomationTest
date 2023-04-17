import { Selector } from 'testcafe';

fixture`Tests`
    .page`http://boulund.io/todo/`;

test("Test1", async t => {
    await t
        .expect(Selector("ul.todo-list").child().count).eql(0)
        .typeText(".new-todo", "Water flowers")
        .pressKey("enter")
        .expect(Selector("ul.todo-list").child().count).eql(1);
})