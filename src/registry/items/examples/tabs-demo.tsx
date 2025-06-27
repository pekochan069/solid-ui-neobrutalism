import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "~/components/ui/text-field";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList class="grid w-xs grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" class="w-xs">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <TextField class="space-y-1">
              <TextFieldLabel>Name</TextFieldLabel>
              <TextFieldInput value="Pedro Duarte" type="text" />
            </TextField>
            <TextField class="space-y-1">
              <TextFieldLabel>Username</TextFieldLabel>
              <TextFieldInput value="@peduarte" type="text" />
            </TextField>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password" class="w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <TextField class="space-y-1">
              <TextFieldLabel>Current password</TextFieldLabel>
              <TextFieldInput type="password" />
            </TextField>
            <TextField class="space-y-1">
              <TextFieldLabel>New password</TextFieldLabel>
              <TextFieldInput type="password" />
            </TextField>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
