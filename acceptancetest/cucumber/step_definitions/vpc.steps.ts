import { defineFeature, loadFeature } from 'jest-cucumber';
import { EC2Client, DescribeVpcsCommand } from "@aws-sdk/client-ec2";

const feature = loadFeature('./cucumber/features/Vpc.feature');

defineFeature(feature, test => {
  test('Provide Vpc', ({ given, when, then }) => {
    	given('Vpc exist', () => {

    	});

    	when('verify vpc exits', async () => {
	
	       const config = { region: "eu-north-1" }
	       const client = new EC2Client(config)
           const input = {}
           const command = new DescribeVpcsCommand(input)
           const vpcs = await client.send(command)
           let found = false
            vpcs.Vpcs.forEach( function(vpc) {
                      if (vpc.VpcId != null) { 
	                       found = true
                          }  
                  })
            expect(found ).toBeTruthy()

    	});

    	then('vpc exist true', () => {

    	});
    });

  });