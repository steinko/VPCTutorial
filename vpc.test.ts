import * as pulumi from "@pulumi/pulumi";



pulumi.runtime.setMocks({
    newResource: function(args: pulumi.runtime.MockResourceArgs): {id: string, state: any} {
        return {
            id: args.inputs.name + "_id",
            state: args.inputs,
        };
    },
    call: function(args: MockCallArgs) {
        return args.inputs;
    },
});




describe ("unit test vpc",() => {
	
    let infra: typeof import("./vpc");
  


    beforeAll(async function() {
        
        infra = await import("./vpc");
    })
	 
     it("should have a ame",() => {
	     pulumi.all([infra.vpc.id]).apply(([id]) => {
	     expect (id).toBeDefined()
	     }) 
      }) 
 }) 