import { View, Text, FlatList, Button } from 'react-native';
import { useRouter } from 'expo-router';

const courses = [
  { id: 'computer-literacy', title: 'Computer Literacy' },
  { id: 'entrepreneurship', title: 'Entrepreneurship' },
  { id: 'advanced-coding', title: 'Advanced Coding' },
];

export default function SixMonthCourses() {
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Six-Month Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.title}
            onPress={() => router.push(`/six-month/${item.id}`)}
          />
        )}
      />
    </View>
  );
}
