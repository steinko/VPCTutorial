
import * as aws from "@pulumi/aws";

export const vpc = new aws.ec2.Vpc("vpc", {
    cidrBlock: "10.0.0.0/16",
});