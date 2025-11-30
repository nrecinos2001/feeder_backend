export interface IPrediction {
  averagesPerDay: number;
  nextFillPrediction: string;
  nextFillPredictionDays: number;
}

export interface IFeedPrediction {
  hourAndMinute: string;
  date: string;
  isToday: boolean;
}
