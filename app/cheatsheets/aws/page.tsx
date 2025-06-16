import { Metadata } from "next"
import { Cloud } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"

export const metadata: Metadata = {
  title: "AWS Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for AWS CLI commands and common operations",
}

const sections = [
  {
    title: "EC2",
    commands: [
      {
        command: "aws ec2 describe-instances",
        description: "List all EC2 instances",
      },
      {
        command: "aws ec2 run-instances --image-id ami-xxx --instance-type t2.micro",
        description: "Launch EC2 instance",
      },
      {
        command: "aws ec2 stop-instances --instance-ids i-xxx",
        description: "Stop EC2 instance",
      },
      {
        command: "aws ec2 terminate-instances --instance-ids i-xxx",
        description: "Terminate EC2 instance",
      },
      {
        command: "aws ec2 describe-security-groups",
        description: "List security groups",
      },
    ],
  },
  {
    title: "S3",
    commands: [
      {
        command: "aws s3 ls",
        description: "List all buckets",
      },
      {
        command: "aws s3 mb s3://bucket-name",
        description: "Create bucket",
      },
      {
        command: "aws s3 cp file.txt s3://bucket-name/",
        description: "Upload file",
      },
      {
        command: "aws s3 sync local-dir s3://bucket-name/",
        description: "Sync directory",
      },
      {
        command: "aws s3 rm s3://bucket-name/file.txt",
        description: "Delete file",
      },
    ],
  },
  {
    title: "IAM",
    commands: [
      {
        command: "aws iam list-users",
        description: "List IAM users",
      },
      {
        command: "aws iam create-user --user-name username",
        description: "Create IAM user",
      },
      {
        command: "aws iam attach-user-policy --user-name username --policy-arn arn:aws:iam::aws:policy/AdministratorAccess",
        description: "Attach policy to user",
      },
      {
        command: "aws iam create-access-key --user-name username",
        description: "Create access key",
      },
      {
        command: "aws iam list-roles",
        description: "List IAM roles",
      },
    ],
  },
  {
    title: "Lambda",
    commands: [
      {
        command: "aws lambda list-functions",
        description: "List Lambda functions",
      },
      {
        command: "aws lambda create-function --function-name name --runtime python3.9 --handler app.lambda_handler --zip-file fileb://function.zip",
        description: "Create Lambda function",
      },
      {
        command: "aws lambda invoke --function-name name --payload '{}' output.txt",
        description: "Invoke Lambda function",
      },
      {
        command: "aws lambda update-function-code --function-name name --zip-file fileb://function.zip",
        description: "Update Lambda code",
      },
      {
        command: "aws lambda delete-function --function-name name",
        description: "Delete Lambda function",
      },
    ],
  },
  {
    title: "CloudFormation",
    commands: [
      {
        command: "aws cloudformation list-stacks",
        description: "List CloudFormation stacks",
      },
      {
        command: "aws cloudformation create-stack --stack-name name --template-body file://template.yaml",
        description: "Create stack",
      },
      {
        command: "aws cloudformation update-stack --stack-name name --template-body file://template.yaml",
        description: "Update stack",
      },
      {
        command: "aws cloudformation describe-stacks --stack-name name",
        description: "Describe stack",
      },
      {
        command: "aws cloudformation delete-stack --stack-name name",
        description: "Delete stack",
      },
    ],
  },
  {
    title: "Route 53",
    commands: [
      {
        command: "aws route53 list-hosted-zones",
        description: "List hosted zones",
      },
      {
        command: "aws route53 create-hosted-zone --name domain.com --caller-reference $(date +%s)",
        description: "Create hosted zone",
      },
      {
        command: "aws route53 list-resource-record-sets --hosted-zone-id zone-id",
        description: "List DNS records",
      },
      {
        command: "aws route53 change-resource-record-sets --hosted-zone-id zone-id --change-batch file://changes.json",
        description: "Update DNS records",
      },
      {
        command: "aws route53 delete-hosted-zone --id zone-id",
        description: "Delete hosted zone",
      },
    ],
  },
]

export default function AWSCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
            <Cloud className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">AWS Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential AWS CLI commands and common operations for cloud infrastructure
          management and deployment.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.commands.map((cmd) => (
                <div key={cmd.command}>
                  <CopyableCommand command={cmd.command} />
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {cmd.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 