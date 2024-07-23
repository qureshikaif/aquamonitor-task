import {View, Text, Image, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {ChartConfig} from 'react-native-chart-kit/dist/HelperTypes';
const Chevron = require('../assets/images/icons/chevron-right.png');

const DownArrow = require('../assets/images/icons/down-arrow.png');

const WeeklyOverview = () => {
  const screenWidth = Dimensions.get('window').width;
  const chartData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'Today'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
      },
    ],
  };
  const chartConfig: ChartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.8,
    useShadowColorFromDataset: false,
    propsForLabels: {
      fontWeight: 'bold',
      fontSize: 13,
    },
    fillShadowGradientFrom: '#0188DD',
    fillShadowGradientOpacity: 1,
    fillShadowGradientTo: '#0188DD',
    fillShadowGradientToOpacity: 1,
  };
  return (
    <View className="border border-gray-300 rounded-md p-4">
      <View className="flex flex-row items-center space-x-1">
        <Text className="text-lg font-semibold text-black">
          Weekly Overview
        </Text>
        <Image source={DownArrow} />
      </View>
      <Text className="text-black">
        It is a long established fact that a reader will be distracted by the
        readable
      </Text>
      <View className="flex">
        <BarChart
          data={chartData}
          width={screenWidth - 90}
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          withHorizontalLabels={false}
          withInnerLines={false}
          chartConfig={chartConfig}
          showBarTops={true}
          style={{paddingRight: 0}}
        />
      </View>
      <View className="w-full h-[0.5] bg-gray-900 my-4" />
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text className="text-black text-base">Set Daily Reminder</Text>
          <Text className="text-black text-sm">
            Reminder after you reached daily limit
          </Text>
        </View>
        <Image source={Chevron} />
      </View>
    </View>
  );
};
export default WeeklyOverview;
