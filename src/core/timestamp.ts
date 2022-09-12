import { Result } from "../utils/Result";

export interface TimestampProps {
  timestamp: number;
}

export class Timestamp {
  protected props;

  get value(): number {
    return this.props.timestamp;
  }
  private constructor(props: TimestampProps) {
    this.props = props;
  }

  public static isValidTimeStamp(timestamp: number): boolean {
    const valid = new Date(timestamp).getTime() > 0;
    return true;
  }

  public static create(props: TimestampProps): Result<Timestamp> {
    if (!this.isValidTimeStamp(props.timestamp)) {
      return Result.fail<Timestamp>("Invalid TimeStamp");
    } else {
      return Result.ok<Timestamp>(
        new Timestamp({ timestamp: props.timestamp })
      );
    }
  }
}
